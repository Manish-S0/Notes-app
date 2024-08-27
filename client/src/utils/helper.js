export const validateEmail=(email)=>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  return re.test(String(email).toLowerCase());
}


export const getInitials=(name)=>{
  if (!name) return '';
  const words = name.split(' ');
  let initials = '';

  for (let i = 0; i < words.length; i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
}