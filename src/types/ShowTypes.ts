export interface ShowModel{
    title: string
    magnetsLinks: MagnetDto[]
}

export interface MagnetDto{
    label: string
    link: string
}

export interface ShowRequestModel{
    url: string
    img: string
    name: string
}

export interface UseShowProps{
    show: ShowModel;
    setShow: (show: ShowModel) => void;
    showRequest: ShowRequestModel;
    setShowRequest: (showRequest: ShowRequestModel)=> void
}