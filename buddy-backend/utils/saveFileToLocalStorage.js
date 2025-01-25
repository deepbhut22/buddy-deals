import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const saveFileToLocalStorage = (file, uploadDir = 'uploads') => {
    try {
        const filePath = path.join(__dirname, '..', uploadDir);
        // const filePath = path.join(__dirname, '..', uploadDir);
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }
    
        const uniqueFileName = `${Date.now()}-${file.originalname}`;
        const filePathWithFileName = path.join(filePath, uniqueFileName);
    
        fs.writeFileSync(filePathWithFileName, file.buffer);
    
        return filePathWithFileName;
    } catch (error) {
        console.error('Error saving file to local storage:', error);
        throw error;
    }
};

export default saveFileToLocalStorage;