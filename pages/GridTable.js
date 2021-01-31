import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';


class BootstrapGridTableComponent extends React.Component {
	render() {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						
						<th>الباقة الذهبية <StarFill color="gold"/></th>
						<th>الباقة الفضية <span style={{color:"black", fontSize:"0.8em"}}>دون حجز</span><StarFill color="gray"/> </th>
						<th>الميزات المقدمة</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>متاح</td>
						<td>متاح</td>
						<td>إظهار معلومات التواصل مع المطعم وموقعه</td>
					</tr>
					<tr>
						<td>عدد الصور المتاح 5 صور</td>
						<td>عدد الصور المتاح 5 صور</td>
						<td>معرض الصور ضمن صفحة المطعم</td>
					</tr>
                    <tr>
						<td>متاح</td>
						<td>غير متاح</td>
						<td>عرض نموذج عن الموسيقى المشغلة في المطعم</td>
					</tr>
                    <tr>
						<td>متاح</td>
						<td>متاح</td>
						<td>عرض لائحة الوجبات وأسعارها</td>
					</tr>
                    <tr>
						<td>متاح</td>
						<td>متاح</td>
						<td>إمكانية إضافة عروض ومناسبات المطعم</td>
					</tr>
                    <tr>
						<td>عدد الإعلانات المتاح (6 إعلانات)</td>
						<td>عدد الإعلانات المتاح (3 إعلانات)</td>
						<td>تصميم ونشر إعلانات على الفيسبوك</td>
					</tr>
					<tr>
						<td>150.000 ل.س</td>
						<td>ل.س 75.000</td>
                        <td></td>
					</tr>
				</tbody>
			</Table>
		)
	}
}

export default BootstrapGridTableComponent;