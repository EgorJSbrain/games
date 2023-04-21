import cls from './AboutUs.module.css'
import { NavLink } from 'react-router-dom';
import { ButtonColorType, ROUTES } from '@/constants/global';
import { useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/selectors';
import Button from "@/components/Button";

const aboutUsContent = {
  imgLink:
    "https://www.comeon-group.com/wp-content/uploads/2021/12/A7R09006-1536x1025.jpg",
  title: "Get to know us better",
  text: `ComeOn Group was founded in 2008 and today we are a leading global player in the rapidly growing iGaming industry.

  We launched our first online brand in 2010, and now we are running a wide range of exciting brands across multiple markets.

  Operating on our proprietary platform we provide a secure, innovative and entertainment-led player experience across our casino and sports betting business. 

  We are an international employer with over 500 talented employees across 7 main locations. We are a fast paced company that keeps on challenging the industry by catching the next big opportunity`,
};

const AboutUs = () => {
  const user = useAppSelector(userSelector);

  return (
    <>
      <div className={cls.title}>
        <h1>Comeon Group</h1>
      </div>

      <div className={cls.content}>
        <div className={cls.contentInfo}>
          <h2 className={cls.contentTitle}>{aboutUsContent.title}</h2>
          <div className={cls.contentText}>{aboutUsContent.text}</div>
        </div>

        <div className={cls.contentImg}>
          <img src={aboutUsContent.imgLink} />
        </div>
      </div>

      {!user && <NavLink to={ROUTES.login}>
        <Button color={ButtonColorType.green}>Go to login</Button>
      </NavLink>}

      {user && <NavLink to={ROUTES.games}>
        <Button color={ButtonColorType.green}>Go to games</Button>
      </NavLink>}
    </>
  );
};

export default AboutUs;
