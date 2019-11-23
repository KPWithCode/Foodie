import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer mgYnC-9M4JBkGRDKtiRBDW4hbCgHFRMRRwd9H8f_xG5_i6sLRqr1cdbyMBEmG5chw97xIJ2_Drob6C8oEu824bRBxBf783yMaVbPelMS9zBZD280pBRS4n5QSDfYXXYx'
    }
})
