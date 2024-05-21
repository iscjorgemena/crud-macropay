import charactersServices from '@/services/characters.services';
import Form from '@/components/form/form';

const FormCharacter = (props: any) => {
    return (<Form />)
}

FormCharacter.getInitialProps = async (query: any) => {
    let id = null
    if (typeof query.id !== 'undefined') {
        id = query.id;
    }
    return { id }
}

export default FormCharacter
