export class CookieUtil {
    //1.get (cookieName)
    static get(name) {
        console.log(`all cookies: ${document.cookie}`)
        let cookieName = `${encodeURIComponent(name)}=`,
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null    
            // console.log(`cookieName = ${cookieName}`)    
            // console.log(`cookieStart = ${cookieStart}`)  
              if (cookieStart > -1) {
              let cookieEnd = document.cookie.indexOf(';', cookieStart)
        // console.log(`cookieEnd = ${cookieEnd}`)      
        if (cookieEnd == -1) {
        cookieEnd = document.cookie.length
    }
    cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
    )
        // console.log(`cookieValue = ${cookieValue}`)    
    }
      return cookieValue  
    }
    static set(
        name,
        value,
        expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 วัน
    ) {
    console.log(expires)
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`   
     if (expires instanceof Date) {
        // cookieText += `; expires=${expires.toUTCString()}`      
        cookieText += `; expires=${expires}`    }
      // console.log(`cookieText = ${cookieText}`)   
       document.cookie = cookieText  }
    static unset(name) {
            CookieUtil.set(name, '', new Date(0))
        }
    }