import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from '../config/environment';
import AWS from 'aws-sdk';

export default class UserActionComponent extends Component {

  @action
  selectedFile(){

    let preview = document.getElementById('imageToUpload');
    let file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    if (file.size > 1048576 || !file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
        return alert("The file must be an image (jpg|jpeg|png|gif) and less than " + (1048576/1024/1024) + "MB");
    } else {
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  @action
  async uploadFile(){

    let files = document.querySelector('input[type=file]').files;
      if (!files.length) {
        return alert("Please choose a file to upload first.");
      }
    let file = files[0];
    let fileName = file.name;

    if (file.size > 1048576 || !file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
        return alert("The file must be an image (jpg|jpeg|png|gif) and less than " + (1048576/1024/1024) + "MB");
    }

    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = String(ENV.AWS_REGION); // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: String(ENV.AWS_IDENTITY_POOL_ID),
    });

    var upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: String(ENV.AWS_BUCKET),
        Key: fileName,
        Body: file
      }
    });

    var promise = upload.promise();

    promise.then(
      function() {
        alert('Successfully uploaded photo.' + file.name);
      },
      function(err) {
        return alert('There was an error uploading your photo: ', err.message);
      }
    );
  }
}
