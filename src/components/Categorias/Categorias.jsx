import { CategoriasContainer } from "./CategoriasStyles";
import Categoria from "./Categoria";
import {useSelector} from 'react-redux'

const Categorias = () => {

    const categories = useSelector(state => state.categories.categories)

    return (
        <CategoriasContainer>
            {categories.map(category => (
                <Categoria
                imgSource={category.img}
                title={category.title}
                category={category.category}
                key={category.id}
                />
            ))}
        </CategoriasContainer>
    )
}

export default Categorias;