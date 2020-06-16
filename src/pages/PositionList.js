import React, { Fragment } from 'react'
import { capitalize } from '../utils'
import PositionItem from './PositionItem'

function PositionList(props) {
  return (
    <Fragment>
      {props.data &&
        props.data.map(data => (
          <PositionItem
            disableButton={props.disableButton}
            key={data.id}
            data={{
              periodeId: props.periode,
              id: data.id,
              quota: data.quota,
              title: data.name,
              minimumGPA: data.minimumGPA,
              minimumGraduation: capitalize(data.minimumGraduate),
              details: data.details,
              studyPrograms: data.studyPrograms,
            }}
          />
        ))}
    </Fragment>
  )
}

export default PositionList
