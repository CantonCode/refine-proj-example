import { useState } from "react";
import { IOrder } from "../../../interfaces"
import { RecentOrdersTable } from "../recentOrdersTable";
import { RecentOrdersQuickView } from "../recentOrdersQuickView";
import { Card, Col, Row } from "antd";
import { Map } from "react-map-gl";



export const RecentOrders: React.FC = () => {
    const [sharedState, setSharedState] = useState<IOrder>();
    const [coords, setCords] = useState<any>({
        longitude: 0,
        latitude: 0,
    });

    


    return(
        <Row gutter={[16,16]} style={{height:"90%",width:'100%'}}>
            <Col xl={12} lg={12} md={24} sm={24} style={{height:"100%"}}>
                <RecentOrdersTable sharedState={sharedState} setSharedState={setSharedState} setCords={setCords}/>  
            </Col>

            <Col xl={12} lg={12} md={24} sm={24} style={{height:"100%", width:"100%"}} >
                <RecentOrdersQuickView sharedState={sharedState} cords={coords}/>  
            </Col>
        </Row>
        )
}