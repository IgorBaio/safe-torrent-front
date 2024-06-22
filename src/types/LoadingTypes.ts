export interface LoadingModel{
    isLoading: boolean
}

export interface UseLoadingProps{
    isLoading: LoadingModel;
    setIsLoading: (isLoading: LoadingModel) => void;
}