import style from './style.module.scss'

const DefaultLayout = (props: { children: Array<JSX.Element> }) => {

    const { children } = props

    return Array.isArray(children) && (
        <div className={style.layout}>
            <div className={style.header}>{children[0]}</div>
            <div className={style.sidebar}>{children[1]}</div>
            <div className={style.content}>{children[2]}</div>
            <div className={style.footer}>{children[3]}</div>
        </div>
    )
}

export default DefaultLayout