/**
 * Created by mephisto on 7/13/17.
 */
import $ from 'jquery';
export default function(userdata){
    var thePromise = $.ajax({
        method: 'POST',
        url: window.hostAddress + '/register',
        data: userdata
    });
    return{
        type: "REGISTER",
        payload: thePromise
    }
}