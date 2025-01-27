import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase.ts';
import { CodeWarsConstants } from '../constants/constants.ts';
import { CodeWarsUnitModel } from '../models/CodeWarsModel.ts';
import { CodeWarsUnitsListStore } from '../stores/CodeWarsUnitsListStore.ts';

export const getUnitsData = async (): Promise<void> => {
  const collectionRef = collection(
    db,
    CodeWarsConstants.CollectionNames.codeWars
  );

  const allDataSnapshot = await getDocs(collectionRef);

  const allData: CodeWarsUnitModel[] = [];

  allDataSnapshot.forEach((doc) => {
    allData.push(doc.data() as CodeWarsUnitModel);
    CodeWarsUnitsListStore.setList(allData);
  });
};

export const createCollection = (collectionName: string) => {
  return collection(db, collectionName);
};
