import { HttpHeaders } from '@angular/common/http';

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJiN2RhMDVjMmY5ODAwNmQ0YzQ4YjMiLCJpYXQiOjE1Nzk5MDg1MTJ9.DNurt69dLLW-OinZMgJrrwOZhnwdS_8aoj9wZaug_Oo';

export const END_POINT = 'https://coding-challenge-api.aerolab.co';

export const HEADERS: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
})