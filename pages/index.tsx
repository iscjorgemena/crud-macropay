import charactersServices from '@/services/characters.services';
import Home from '@/components/index/home';

const Index = (props:any) => {
  let {characters} = props
  return (<Home characters={characters} />)
}

Index.getInitialProps = async () => {
  let characters = await charactersServices.get();
  return { characters }

}

export default Index
