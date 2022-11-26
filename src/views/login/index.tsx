import React, { useEffect } from 'react'
import { loginApi } from '../../http/modules/login'

export default function Login() {
    const doLogin = async () => {
        let { data } = await loginApi({
            username: 'qd',
            password: '123456'
        })
    }
    return (
        <div>
            <div onClick={doLogin}>发起请求post</div>
            <div>发起请求get</div>
        </div>

    )
}
