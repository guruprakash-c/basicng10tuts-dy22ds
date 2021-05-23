import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-error',
  templateUrl: './app-error.component.html',
  styleUrls: ['./app-error.component.css']
})
export class AppErrorComponent implements OnInit {
  error = {
    statusCode:500, statusText: 'Internal Server Error'
  };
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      if(params.err != null){
        this.error.statusCode = parseInt(params.err);
        this.error.statusText = setErrorState(parseInt(params.err));
      } 
    });
   }

  ngOnInit() {
  }

}
let setErrorState = (code = null)=>{
  let statTxt = 'Internal Server Error';
  if(code != null){
    switch (code) 
    {
        case 100: statTxt = 'Continue'; break;
        case 101: statTxt = 'Switching Protocols'; break;
        case 200: statTxt = 'OK'; break;
        case 201: statTxt = 'Created'; break;
        case 202: statTxt = 'Accepted'; break;
        case 203: statTxt = 'Non-Authoritative Information'; break;
        case 204: statTxt = 'No Content'; break;
        case 205: statTxt = 'Reset Content'; break;
        case 206: statTxt = 'Partial Content'; break;
        case 300: statTxt = 'Multiple Choices'; break;
        case 301: statTxt = 'Moved Permanently'; break;
        case 302: statTxt = 'Moved Temporarily'; break;
        case 303: statTxt = 'See Other'; break;
        case 304: statTxt = 'Not Modified'; break;
        case 305: statTxt = 'Use Proxy'; break;
        case 400: statTxt = 'Bad Request'; break;
        case 401: statTxt = 'Unauthorized'; break;
        case 402: statTxt = 'Payment Required'; break;
        case 403: statTxt = 'Forbidden'; break;
        case 404: statTxt = 'Not Found'; break;
        case 405: statTxt = 'Method Not Allowed'; break;
        case 406: statTxt = 'Not Acceptable'; break;
        case 407: statTxt = 'Proxy Authentication Required'; break;
        case 408: statTxt = 'Request Time-out'; break;
        case 409: statTxt = 'Conflict'; break;
        case 410: statTxt = 'Gone'; break;
        case 411: statTxt = 'Length Required'; break;
        case 412: statTxt = 'Precondition Failed'; break;
        case 413: statTxt = 'Request Entity Too Large'; break;
        case 414: statTxt = 'Request-URI Too Large'; break;
        case 415: statTxt = 'Unsupported Media Type'; break;
        case 500: statTxt = 'Internal Server Error'; break;
        case 501: statTxt = 'Not Implemented'; break;
        case 502: statTxt = 'Bad Gateway'; break;
        case 503: statTxt = 'Service Unavailable'; break;
        case 504: statTxt = 'Gateway Time-out'; break;
        case 505: statTxt = 'HTTP Version not supported'; break;
        default:
            statTxt = 'Internal Server Error';
        break;
    }
  }
  return statTxt;  
}