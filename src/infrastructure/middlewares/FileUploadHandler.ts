import multer from 'multer'
const PERMITED_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif']
const storage = multer.memoryStorage()
const upload = multer({
  storage,
  limits: {
    files: 1,
    fileSize: 1024 * 1024 * 10
  },
  fileFilter (req, file, callback) {
    const extension = file.mimetype.split('/')[1]
    if (PERMITED_EXTENSIONS.includes(extension)) {
      callback(null, true)
    } else {
      callback(new Error('Tipo de archivo no permitido'))
    }
  }

})

const uploadFileMiddleware = upload.single('image')
export { uploadFileMiddleware }
