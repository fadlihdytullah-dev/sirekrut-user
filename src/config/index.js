// @flow
import Firebase from 'firebase'
const BASE_URL = 'https://us-central1-si-rekrut.cloudfunctions.net/api'
const LOCAL_BASE_URL = 'http://localhost:5001/si-rekrut/us-central1/api'
export const POSITIONS_API = {
  getAll: `${BASE_URL}/positions`,
  getSingle: (id: string) => `${BASE_URL}/positions/${id}`,
}

export const SUBMISSIONS_API = {
  getAll: `${BASE_URL}/submission`,
  getSingle: (id: string) => `${BASE_URL}/submission/${id}`,
  post: `${BASE_URL}/submission`,
}

export const FORM_CONF_API = {
  getConfig: `${BASE_URL}/forms-conf`,
  getSingle: (id: string) => `${BASE_URL}/submission/${id}`,
  post: `${BASE_URL}/submission`,
}

export const TIMELINES_API = {
  getAll: `${BASE_URL}/timelines`,
  getSingle: (id: string) => `${BASE_URL}/timelines/${id}`,
}

const AUTH_TOKEN =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0Mzg3ZGUyMDUxMWNkNDgzYTIwZDIyOGQ5OTI4ZTU0YjNlZTBlMDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2ktcmVrcnV0IiwiYXVkIjoic2ktcmVrcnV0IiwiYXV0aF90aW1lIjoxNTkxMjQ2NDI4LCJ1c2VyX2lkIjoidlRPdFBDdjY1MVN2Uk1oVnlYTUNkMVFNUEdzMiIsInN1YiI6InZUT3RQQ3Y2NTFTdlJNaFZ5WE1DZDFRTVBHczIiLCJpYXQiOjE1OTEyNDY0MjgsImV4cCI6MTU5MTI1MDAyOCwiZW1haWwiOiJmYWRsaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZmFkbGlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ax9JpiL30kNkgGTzMNBSanXMxhajChLdtdCvDo--G72XdbmvE9cz73zfxCGrNCaXKun6PbHyUgU_lG5khsWhmdHZVs9KGu36vp_OE5_EWcnF5gMv4CFLfuklCh-x3N2ZDmy6vbpvkJ4HGqCXP7OrmY3aK-zzVLzngdagzTMw4vQOH_PlpSNevED1q7WuZGL-kyI8I7NVYroitq0ApnShjkyQBXCI-Pz9Ef9XZg62GsJBaZOatZ78zcKAsmBmVi_r0f_FOpMQjzFg_39oWcWoCkEYZK0jRUMgmMr3RYhK6TW08gOYCX7pyKew1SIC5CXgqupb7KsMn_ld5Ccr3mS4LA'

export const config = {
  headerConfig: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
  app: {
    strataOptions: [
      {
        key: 'D3',
        label: 'Diploma',
        value: 'DIPLOMA',
      },
      {
        key: 'S1',
        label: 'Sarjana',
        value: 'SARJANA',
      },
      {
        key: 'S2',
        label: 'Magister',
        value: 'MAGISTER',
      },
      {
        key: 'S3',
        label: 'Doktor',
        value: 'DOKTOR',
      },
    ],
  },
}

const firebaseConfig = {
  apiKey: 'AIzaSyAPmjhe1mitIgs18AYcYNOF95KIM-8iWAA',
  authDomain: 'si-rekrut.firebaseapp.com',
  databaseURL: 'https://si-rekrut.firebaseio.com',
  projectId: 'si-rekrut',
  storageBucket: 'si-rekrut.appspot.com',
  messagingSenderId: '375797560482',
  appId: '1:375797560482:web:82ef40bd4ddc98ef4113fb',
  measurementId: 'G-RJMNSJKF7N',
}

const appConfig = Firebase.initializeApp(firebaseConfig)

export const auth = Firebase.auth()
export const db = appConfig.database()
export const time = Firebase.database.ServerValue.TIMESTAMP
