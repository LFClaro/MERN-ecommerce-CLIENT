// React-Dropzone
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css' // Dropzone Styling

const DropzoneUploader = (props) => {

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    props.setFile(file);
  }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  }

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      submitButtonContent={null}
      accept="image/*"
      inputContent={(files, extra) => (extra.reject ? 'Image files only' : 'Drag an Image File or Click to Browse')}
      styles={{
        dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
        inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
        dropzoneActive: { borderColor: 'purple', backgroundColor: '#B999D0'  },
      }}
    />
  )
}

export default DropzoneUploader;