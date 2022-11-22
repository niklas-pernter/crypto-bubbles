type RestrictedComponentProps = {
    condition: boolean,
    children: any[] | any
}

export const RestrictedComponent = ({condition, children}: RestrictedComponentProps) => {


    if(condition) {
        return (
            <>
                {children}
            </>
        )
    }
    else {
        return (
            <></>
        )
    }
}
