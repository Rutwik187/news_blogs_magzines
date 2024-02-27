import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatAudio from "../../components/post/post-format/PostFormatAudio";
import PostFormatGallery from "../../components/post/post-format/PostFormatGallery";
import PostFormatQuote from "../../components/post/post-format/PostFormatQuote";
import PostFormatStandard from "../../components/post/post-format/PostFormatStandard";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import PostFormatVideo from "../../components/post/post-format/PostFormatVideo";
import PostSectionSix from "../../components/post/PostSectionSix";


const PostDetails = ({postContent, allPosts}) => {

	const PostFormatHandler = () => {
		if (postContent.postFormat === 'video') {
			return <PostFormatVideo postData={postContent} allData={allPosts}/>
		} else if (postContent.postFormat === 'gallery') {
			return <PostFormatGallery postData={postContent} allData={allPosts} />
		}  else if (postContent.postFormat === 'audio') {
			return <PostFormatAudio postData={postContent} allData={allPosts} />
		} else if (postContent.postFormat === 'quote') {
			return <PostFormatQuote postData={postContent} allData={allPosts} />
		} else if (postContent.postFormat === 'text') {
			return <PostFormatText postData={postContent} allData={allPosts} />
		}else {
			return <PostFormatStandard  postData={postContent} allData={allPosts} />
		}
	}

    return ( 
        <>
		<HeadMeta metaTitle="Post Details"/>
        <HeaderOne />
        <Breadcrumb bCat={postContent.cate} aPage={postContent.title}/>
		<PostFormatHandler />
		<PostSectionSix postData={allPosts} />
        <FooterOne />
        </>
     );
}
 
export default PostDetails;

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
		'postFormat',
		'title',
		'quoteText',
		'featureImg',
		'videoLink',
		'audioLink',
		'gallery',
		'date',
		'slug',
		'cate',
		'cate_bg',
		'author_name',
		'author_img',
		'author_bio',
		'author_social',
		'post_views',
        'post_share',
		'content',
	])
	const content = await markdownToHtml(post.content || '')

    const allPosts = getAllPosts([
		'title',
		'featureImg',
		'postFormat',
		'date',
		'slug',
		'cate',
		'cate_bg',
		'cate_img',
		'author_name',
	  ])

    return {
        props: {
            postContent : {
                ...post,
                content
            },
            allPosts
        }
    }
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])
	
	const paths = posts.map(post => ({
        params: {
            slug: post.slug
		}
	}))

	return {
		paths,
		fallback: false,
	}
}
