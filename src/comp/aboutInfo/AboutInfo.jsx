import "./AboutInfo.scss";
import dataSpec from '../../data/spec.js';

export const AboutInfo = () => {
  return (
    <div className="about">
      <div className="txt">
        <div className="enInfo">
          <h1>Reval World Company</h1>
          <p>
            We are specialized particularly in the field of{" "}
            <span>automatic doors</span>, <span>aluminum windows</span>,{" "}
            <span>shatter roll</span> and all
            <span> steel and aluminum works</span>.
          </p>
          <p>
            Our experience extends up to <span>more than 20 years</span> in the
            field and we have directs dealings with European, American, and
            Chinese leading companies, as we gurantee our products and satisfy
            our customer's needs regarding <span>after sale service</span>.
          </p>
          <p>
            Your satisfaction is our objective and your confidence is a source
            of pride for us.
          </p>
        </div>

        <div className="arInfo">
          <h1>مؤسسة ريفال العالم</h1>
          <p>
            نتخصص في عالم <span>الأبواب الأوتوماتيكية</span> خاصة, و{" "}
            <span>نوافذ الألمنيوم</span> و <span>رول الشتر</span> و كافة{" "}
            <span>أعمال الحديد و الألمنيوم</span>
          </p>
          <p>
            خبرتنا <span>أكثر من 20 عام</span> في هذا المجال و لدينا تعامل مباشر
            مع كبرى الشركات الأوروبية و الأمريكية و الصينية حيث نضمن كافة
            منتجاتنا و تلبية عملائنا في <span>الصيانة بعد البيع</span>.
          </p>
          <p>"إرضائكم دفنا و ثقتكم فخر لنا"</p>
        </div>
      </div>

      <div className="exp-txt">
        <div className="spec">
            <h2>We are specialized in:</h2>
            <ul>
                {dataSpec.map((item)=>{
                    return (
                        <li><img src={item.img} alt="" />{item.name}</li>
                    )
                })}
            </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutInfo;
