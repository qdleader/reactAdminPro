
import ReactDOM from 'react-dom/client';
import Loading from './loading'

let loadingCount = 0


// 开启loading
export const showLoading = () => {
    if (loadingCount === 0) {
        let dom = document.createElement("div");
        dom.setAttribute("id", "qd-loading");
        document.body.appendChild(dom);
        ReactDOM.createRoot(dom).render(<Loading />)
    }
    loadingCount++;
}



// 关闭loading
export const hideLoading = () => {
    if (loadingCount <= 0) return;
    loadingCount--;
    if (loadingCount === 0) {
        document.body.removeChild(document.getElementById("qd-loading") as HTMLElement)
    }
}


