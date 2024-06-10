import styles from './render.module.css'

export function render() {
    const el = document.createElement('div')
    el.classList.add(styles.root)
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}