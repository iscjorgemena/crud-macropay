import charactersServices from '@/services/characters.services';
import Form from '@/components/form/form';

const FormCharacter = (props: any) => {
    let { id, character } = props
    return (<Form id={id} character={character} />)
}

FormCharacter.getInitialProps = async ({ query }: any) => {
    let { id } = query
    let character = null
    if (id !== 'new') {
        character = await charactersServices.getOne(id)
    }
    return { id, character }
}

export default FormCharacter
