import PropTypes from 'prop-types';

const NewArticle = ({ title, text }) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none">
      <h2 className="hover:text-SoftOrange cursor-pointer mb-3 font-bold text-[20px]">{title}</h2>
      <p className="text-[15px]">{text}</p>
    </article>
  );
};

NewArticle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewArticle;