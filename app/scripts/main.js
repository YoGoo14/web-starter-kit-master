'use strict'; //ne laisse rien passer

class ESDJob
{

    constructor()
    {
        this._checkSetup();
        this._initFirebase();
    }

    _initFirebase()
    {
        this.auth = firebase.auth();
        this.db = firebase.firestore();

        const settings = {timestampsInSnapshots: true};
        this.db.settings(settings);

        this.storage = firebase.storage();
    }

    _checkSetup()
    {
        if (!window.firebase || !(fiebase.app instanceof Function) || !firebase.app().option) {
            window.alert('you have not configured and imported the Firebase SDK.' +
                'Please try again');
        }
    }

}

window.onload = function() {
    window.ESDJob = new ESDJob();
}
