import React, { Suspense } from 'react'
import { Spin } from 'antd'

const OtherComponent = React.lazy(() => import('./components/other-components'))

const AdvancedGuide: React.FC = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<Spin size="large"/>}>
                <OtherComponent />
            </Suspense>
        </React.Fragment>
    )
}

export default AdvancedGuide