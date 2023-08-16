import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const SearchFilter = () => {
  
  const navigate = useNavigate();

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    navigate(`?q=${ searchText }`);
  };

  return (
    <form 
      className='col-9 mt-2'
      onSubmit={ onSearchSubmit }
    >
      <input 
        type="text" 
        placeholder='Buscar'
        autoComplete='off'
        name='searchText'
        value={ searchText }
        onChange={ onInputChange }
      />
    </form>  
  )
}
