/**
 * Created by rpaulin on 6/30/17.
 */

// IMAGE UPLOAD FOR USERS

(() => {
    document.getElementById("file-input").onchange = () => {
    const files = document.getElementById('file-input').files;
    const file = files[0];
    if(file == null){
        return alert('No file selected.');
    }
    getSignedRequestUser(file);
};
})();

function getSignedRequestUser(file){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                uploadFileUser(file, response.signedRequest, response.url);
            }
            else{
                alert('Could not get signed URL.');
            }
        }
    };
    xhr.send();
}

function uploadFileUser(file, signedRequest, url){
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                document.getElementById('preview').src = url;
                //document.getElementById('avatar-url').value = url;
            }
            else{
                alert('Could not upload file.');
            }
        }
    };
    xhr.send(file);
}


// IMAGE UPLOAD FOR ITEMS

(() => {
    document.getElementById("file_input_item").onchange = () => {
    const files = document.getElementById('file_input_item').files;
    const file = files[0];
    if(file == null){
        return alert('No file selected.');
    }
    getSignedRequestItem(file);
};
})();

function getSignedRequestItem(file){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                uploadFileItem(file, response.signedRequest, response.url);
            }
            else{
                alert('Could not get signed URL.');
            }
        }
    };
    xhr.send();
}

function uploadFileItem(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () =>
    {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('preview_item').src = url;
                //document.getElementById('avatar-url').value = url;
            }
            else {
                alert('Could not upload file.');
            }
        }
    }
    ;
    xhr.send(file);
}