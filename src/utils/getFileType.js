export const getFileType = (fname) =>
  fname.slice(((fname.lastIndexOf('.') - 1) >>> 0) + 2)
