const testFolder = '../data';
import fs from 'node:fs';

fs.readdir(testFolder, function (error, filelist) {
  console.log(filelist);
});
