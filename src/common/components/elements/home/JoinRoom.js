import React, {useRef, useEffect} from 'react'

export default function JoinRoom() {
  
  const fields = useRef(null);

  useEffect(() => {
    const inputs = fields.current.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener('keyup', (el) => {
        if(el.target.value.length === 1 && el.target.nextElementSibling){
          el.target.nextElementSibling.focus()
        }
        if((el.key == "Backspace" || el.key == "Delete") && el.target.previousElementSibling){
          el.target.value = ""
          el.target.previousElementSibling.focus()
        }
      })
    })
  }, [])
  
  return (
    <div>
      <h1 className='text-center text-2xl my-8'>Digite o codigo da sala:</h1>
      <div>
        <form action="">
          <fieldset ref={fields} className='codefield'>
            <input autoComplete="off" type="text" inputMode="numeric" pattern="\d*" maxLength="1" defaultValue="" />
            <input autoComplete="off" type="text" inputMode="numeric" pattern="\d*" maxLength="1" defaultValue="" />
            <input autoComplete="off" type="text" inputMode="numeric" pattern="\d*" maxLength="1" defaultValue="" />
            <input autoComplete="off" type="text" inputMode="numeric" pattern="\d*" maxLength="1" defaultValue="" />
            <input autoComplete="off" type="text" inputMode="numeric" pattern="\d*" maxLength="1" defaultValue="" />
            <input autoComplete="off" type="text" inputMode="numeric" pattern="\d*" maxLength="1" defaultValue="" />
          </fieldset>
        </form>
      </div>
    </div >
  )
}
