import { TabBarContainer, TabBarContent, TabBarIcon } from "./styles"
import { TabBarProps } from "./types"
import homeIcon from '../../assets/homeIcon.svg'
import { useNavigate } from "react-router"


const userIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO3UQUrDQBSH8R8umqVdWrrWK+hJxEPYHsNuRPFAurR1ZfEAuinVlUUUXVYGJiCCdNJObCn54A8heeGbl8wbGjaUAn2M8BETrnvxWS10Mcb8j9zHmqwUC6Q/5Vk77ydIy5zmFN9VEA9zit8riENtNuYVs5aO37biH/fWtauLOKMpc9ySme4CeS0nV0krfsph3HAht/Fe9k4b/pUdHGGAGzzjK2aKa5zhMNauTAcXeKkwx2FR59hbRtjGFT6XOKfLhHcvsZsqPcDTCsLfecR+ivgho7TMOEU8rUE8SRGfYJZR+orjFHHDdvENyZP0ibBvoI8AAAAASUVORK5CYII'

export const TabBar = ({children}: TabBarProps) =>{
    const navigate = useNavigate()

    const isProfessional = localStorage.getItem('@teacher')


    const onNavigate = (path: string) => {
        navigate(path)
    }

    return (
        <div style={{position: 'relative'}} >
        {children}
        <TabBarContainer>
            <TabBarContent>
                <TabBarIcon focused={!window.location.pathname.includes('perfil')} src={homeIcon} alt="Home" onClick={()=>onNavigate(isProfessional ? '/teacher-area': '/student-area')}/>
                <TabBarIcon focused={window.location.pathname.includes('perfil')} src={userIcon} alt="User" onClick={()=>onNavigate('/perfil')}/>
            </TabBarContent>
        </TabBarContainer>
        </div>
    )
}