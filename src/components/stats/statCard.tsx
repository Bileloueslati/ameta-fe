import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../common/card';

export default function StatCard() {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="font-gotham font-medium text-lg text-gray-700 dark:text-slate-400 mb-1 lg:mb-6">
            Total Sheets
          </h2>
          <h3 className="font-gotham font-medium text-xl dark:text-white">547 k</h3>
        </div>
        <div className="bg-red-300 bg-opacity-40 rounded-full h-10 w-10 hidden lg:flex justify-center items-center">
          <FontAwesomeIcon
            className="text-red-500 dark-text-white"
            icon={faMousePointer as IconProp}
          />
        </div>
      </div>
    </Card>
  );
}
