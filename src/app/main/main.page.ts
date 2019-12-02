import {Component, OnInit} from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    validations_form: FormGroup;
    image: any;

    constructor(
        private camera: Camera,
        private imagePicker: ImagePicker,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public router: Router,
        private formBuilder: FormBuilder,
        private firebaseService: FirebaseService,
        private webview: WebView
    ) { }

    ngOnInit() {
        //this.resetFields();
    }

    openCam() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            this.uploadImageToFirebase(imageData);

        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err))
        });
    }


    // resetFields() {
    //     this.image = './assets/img/reeche_logo.png';
    //     this.validations_form = this.formBuilder.group({
    //         title: new FormControl('', Validators.required),
    //         description: new FormControl('', Validators.required)
    //     });
    // }

    onSubmit(value) {
        const data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createTask(data)
            .then(
                res => {
                    this.router.navigate(['/tabs/tabs/main']);
                }
            );
    }


    openImagePicker(){
        this.imagePicker.hasReadPermission()
            .then((result) => {
                if(result == false){
                    // no callbacks required as this opens a popup which returns async
                    this.imagePicker.requestReadPermission();
                }
                else if(result == true){
                    this.imagePicker.getPictures({
                        maximumImagesCount: 1
                    }).then(
                        (results) => {
                            for (var i = 0; i < results.length; i++) {
                                this.uploadImageToFirebase(results[i]);
                            }
                        }, (err) => console.log(err)
                    );
                }
            }, (err) => {
                console.log(err);
            });
    }


    async uploadImageToFirebase(image){
        const loading = await this.loadingCtrl.create({
            message: 'Please wait...'
        });
        const toast = await this.toastCtrl.create({
            message: 'Image was updated successfully',
            duration: 3000
        });
        this.presentLoading(loading);
        let image_src = this.webview.convertFileSrc(image);
        let randomId = Math.random().toString(36).substr(2, 5);

        //uploads img to firebase storage
        this.firebaseService.uploadImage(image_src, randomId)
            .then(photoURL => {
                this.image = photoURL;
                loading.dismiss();
                toast.present();
            }, err =>{
                console.log(err);
            })
    }


    async presentLoading(loading) {
        return await loading.present();
    }

}
