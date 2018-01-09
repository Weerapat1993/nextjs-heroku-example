import React from 'react'

const Fork = ({ stars }) => (
	<div>
		<div
			className="material-icons mdl-badge mdl-badge--overlap"
			data-badge={stars || 0}
		>
			<a href="https://github.com/ooade/NextSimpleStarter">
				<button className="mdl-js-button mdl-button--raised mdl-button--colored">
					Fork me ({stars || 0})
				</button>
			</a>
		</div>
	</div>
)

export default Fork