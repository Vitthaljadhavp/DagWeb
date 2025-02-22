import axios from 'axios'
import React from 'react'

export class Services{
  // static serverURL="https://www.directadmissionguideline.com/api"
  static serverURL="http://localhost:8082"

  static getAllServices() {
    const dataURL=`${this.serverURL}/getAllServices`
    return axios.get(dataURL)
  }

}
