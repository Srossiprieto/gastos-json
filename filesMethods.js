import fs from 'fs';

export const get = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file + ".json", "utf8", (err, content) => {
            if (err) {
                reject(err);
            }
            // Check if content is not empty before parsing
            if (content.trim() !== '') {
                resolve(JSON.parse(content));
            } else {
                resolve([]); // or return an empty object {} or null or whatever you consider as default
            }
        });
    });
};

export const save = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file + ".json", JSON.stringify(content), (err) => {
            if (err) {
                reject(err);
            }
            resolve();

        });
    });
};