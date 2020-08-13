/* import React from 'react'
import getSpeciality from '../../utils/speciality'
import { Checkbox, Collapse } from 'antd'

const {Panel} = Collapse

const filterSpeciality = getSpeciality()

function filterLawyers() {
    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
            <Panel header key="1">
                {filterSpeciality.map((name, index) => (
                    <React.Fragment key={index}>
                        <Checkbox onChange type="checkbox" checked />
                        <span>{name.name}</span>
                    </React.Fragment>
                ))}
            </Panel>
            </Collapse>
        </div>
    )
*/