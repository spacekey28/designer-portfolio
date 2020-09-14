/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { RichText } from "@wordpress/block-editor";
import { TextareaControl } from "@wordpress/components";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	return (
		<div>
			{/* <img src={props.attributes.image.source_url} alt="" /> */}
			<RichText.Content tagName="h3" value={props.attributes.heading} />
			<p>{props.attributes.textarea}</p>
		</div>
	);
}
