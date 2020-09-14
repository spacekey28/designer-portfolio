/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	Button,
	Spinner,
	ResponsiveWrapper,
	TextareaControl,
} from "@wordpress/components";
import {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from "@wordpress/block-editor";

import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";

const ALLOWED_MEDIA_TYPES = ["image"];

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
class Edit extends Component {
	render() {
		const {
			attributes: { mediaId, heading, textarea },
			setAttributes,
			className,
			image,
		} = this.props;
		const instructions = (
			<p>
				{__(
					"To edit the image, you need permission to upload media.",
					"zigzag-row"
				)}
			</p>
		);

		let styles = {};
		if (image && image.source_url) {
			styles = { backgroundImage: `url(${image.source_url})`, height: "250px" };
		}

		const onUpdateImage = (image) => {
			setAttributes({
				mediaId: image.id,
			});
		};

		const onRemoveImage = () => {
			setAttributes({
				mediaId: undefined,
			});
		};

		const onChangeHeading = (newHeading) => {
			setAttributes({ heading: newHeading });
		};

		const onChangeTextarea = (newText) => {
			setAttributes({ textarea: newText === undefined ? "none" : newText });
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__("Select an image", "zigzag-row")}
						initialOpen={true}
					>
						<div className="wp-block-zigzag-row-image">
							<MediaUploadCheck fallback={instructions}>
								<MediaUpload
									title={__("Select an image", "zigzag-row")}
									onSelect={onUpdateImage}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									value={mediaId}
									render={({ open }) => (
										<Button
											className={
												!mediaId
													? "editor-post-featured-image__toggle"
													: "editor-post-featured-image__preview"
											}
											onClick={open}
										>
											{!mediaId && __("Select an image", "zigzag-row")}
											{!!mediaId && !image && <Spinner />}
											{!!mediaId && image && (
												<ResponsiveWrapper
													naturalWidth={image.media_details.width}
													naturalHeight={image.media_details.height}
												>
													<img
														src={image.source_url}
														alt={__("Zigzag Image", "zigzag-row")}
													/>
												</ResponsiveWrapper>
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{!!mediaId && image && (
								<MediaUploadCheck>
									<MediaUpload
										title={__("Select an image", "zigzag-row")}
										onSelect={onUpdateImage}
										allowedTypes={ALLOWED_MEDIA_TYPES}
										value={mediaId}
										render={({ open }) => (
											<Button onClick={open} isDefault isLarge>
												{__("Replace image", "zigzag-row")}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							)}
							{!!mediaId && (
								<MediaUploadCheck>
									<Button onClick={onRemoveImage} isLink isDestructive>
										{__("Remove image", "zigzag-row")}
									</Button>
								</MediaUploadCheck>
							)}
						</div>
					</PanelBody>
				</InspectorControls>
				<div className={className + "-image"} style={styles}></div>
				<RichText
					tagName="p"
					className={className + "-heading"}
					onChange={onChangeHeading}
					value={heading}
				/>
				<TextareaControl
					className={className + "-text"}
					onChange={onChangeTextarea}
					value={textarea}
				/>
			</Fragment>
		);
	}
}

export default compose(
	withSelect((select, props) => {
		const { getMedia } = select("core");
		const { mediaId } = props.attributes;

		return {
			image: mediaId ? getMedia(mediaId) : null,
		};
	})
)(Edit);
