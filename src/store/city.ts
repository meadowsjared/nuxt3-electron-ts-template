import { onValue, ref, remove, set } from 'firebase/database';
import { defineStore } from 'pinia';
import { City } from '../domain/City';
import { citiesRef, db } from '../plugins/firebase';

interface State {
  id: string;
  _cities: City[];
  count: number;
  maxId: number;
}

export const useCityStore = defineStore('city', {
  state: (): State => ({
    id: 'counter',
    count: 0,
    _cities: [] as City[],
    maxId: 0,
  }),
  getters: {
    cities: (state: State) => {
      return state._cities;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    loadCities() {
      // set up the firebase listener
      onValue(citiesRef, snapshot => {
        const fbData = (snapshot.val() ?? []) as City[] | { [key: number]: City };
        const fbArray = Array.isArray(fbData)
          ? fbData
          : (Object.entries(fbData).reduce((total, [keyString, value]) => {
              total[parseInt(keyString)] = value;
              return total;
            }, [] as City[]) as City[]); // convert to array if it's not already
        const cities = fbArray.map((city, index) => {
          city.key = index; // save the key it's stored under firebase
          return city;
        });
        // transfer the keys to the city objects
        this._cities = cities.filter(value => value !== undefined);
        console.log('this._cities onValue', this._cities);
        const highestId = this._cities.reduce((canId, city) => {
          if (city.id > canId) return city.id;
          return canId;
        }, 0);
        this.maxId = highestId + 1;
      });
    },
    deleteCity(city: City) {
      console.log('deleting city', city);
      const cityRef = ref(db, 'cities/' + city.key);
      remove(cityRef)
        .then(() => {
          console.log(`City ${'cities/' + city.key} removed successfully!`);
        })
        .catch(error => {
          console.warn(`City ${'cities/' + city.key} could not be removed.`, error);
        });
    },
    saveCity(city: City) {
      const cityRef = ref(db, 'cities/' + city.key);
      set(cityRef, city)
        .then(() => {
          console.log(`City ${city.key} saved successfully!`);
        })
        .catch(error => {
          console.warn(`City ${city.key} could not be saved.`, error);
        });
    },
    addCity(newCity: string) {
      const city: City = {
        name: newCity,
        id: this.maxId++,
        key:
          (this._cities?.reduce((highestKey, city) => {
            if (city.key > highestKey) return city.key;
            return city.key;
          }, 0) ?? -1) + 1, // this key is backfilled when it's updated from firebase
      };
      // this._cities?.push(city); // this is handled in the firebase onValue listener
      this.saveCity(city);
      console.log('adding todo from Pinia', newCity);
    },
  },
});
