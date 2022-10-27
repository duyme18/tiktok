import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Hello world
        </p>
    )
}

export default Paragraph