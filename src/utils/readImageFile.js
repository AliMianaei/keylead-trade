export const readImageFile = (inputFile) => {
    const temporaryFileReader = new FileReader();
  
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      temporaryFileReader.onloadend = (file) => {
        // resolve({ name: new Date().getTime() + "-" + inputFile.name, binary: temporaryFileReader.result, mimeType: inputFile.type });
        resolve({ name: inputFile.name, binary: temporaryFileReader.result, mimeType: inputFile.type });
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  };