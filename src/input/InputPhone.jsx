
import '../style/input.css'; // Импорт стилей
const InputPhone = () => {


  return (
    <div className="flex  justify-center min-h-[50px] mt-10 ">
      <form className="flex items-center bg-white rounded-[20px] shadow-md overflow-hidden input">
        <input
          type="tel"    
          placeholder="8 (999) 999-99-99"
          className="px-4 py-4 text-gray-800 outline-none text-center "
        />
        <div className="flex relative right-1 btnblue">

        <div className="buttondiv flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1 rounded-[15px] transition-all">
            <button type="submit">

          Получить бесплатно 
            </button>
            <div className="vector2">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
            </div>
      </form>

   
   
      

    </div>
  );
};

export default InputPhone;
