import React from 'react';
import { UseFormWatch } from 'react-hook-form';

export const FormDebug = ({
  watchedValues
}: {
  watchedValues: UseFormWatch<object>;
}) => {
  return (
    <div className="mt-5 rounded-lg bg-gray-50 p-3">
      <h2 className="mb-3 flex items-center rounded-lg bg-gray-600 p-2 text-white">
        Valeurs du formulaire en temps réel :
      </h2>
      <pre>{JSON.stringify(watchedValues, null, 2)}</pre>
    </div>
  );
};
