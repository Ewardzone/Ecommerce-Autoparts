import img404 from '../Assets/Img/img404/img404.png'

import {
    FoundContainerStyled,
    FoundSubtitleStyled,
    FoundTextStyled,
    FoundTitleStyled,
} from './NotFoundStyles'

const NotFound = () => {
    return (
        <div>
            <FoundContainerStyled>
                <FoundTextStyled>
                    <FoundTitleStyled>
                        404 Error
                    </FoundTitleStyled>
                    <FoundSubtitleStyled>
                        Auto Inservible!!!
                    </FoundSubtitleStyled>
                    <p>
                        Al parecer la página que buscas no existe o fue removida.
                    </p>
                </FoundTextStyled>
                <img
                    src= {img404}
                    alt= 'ErrorImg'
                    className='NotFoundImg'
                />
            </FoundContainerStyled>
        </div>
    )
}

export default NotFound